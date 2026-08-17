import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideBriefcase, lucideHome, lucideSearch } from '@ng-icons/lucide';
import { HlmBreadcrumbImports } from '@spartan-ng/helm/breadcrumb';
import { HlmInputGroupImports } from '@spartan-ng/helm/input-group';
import { HlmSeparatorImports } from '@spartan-ng/helm/separator';
import { HlmSidebarImports } from '@spartan-ng/helm/sidebar';
import { Router, NavigationEnd, ActivatedRoute, RouterLink } from '@angular/router';
import { filter } from 'rxjs';

export interface Breadcrumb {
  label: string;
  url: string;
}
@Component({
  selector: 'app-site-breadcrumb',
  standalone: true,
  imports: [
    HlmSidebarImports,
    HlmSeparatorImports,
    HlmBreadcrumbImports,
    HlmInputGroupImports,
    NgIcon,
    RouterLink,
  ],
  providers: [provideIcons({ lucideSearch, lucideHome, lucideBriefcase })],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./navigation.html`,
})
export class SiteBreadcrumb {
  // Responsável por injetar/importar as dependências necessárias para o breadcrumb funcionar
  private router = inject(Router); // Responsável por escutar as mudanças de rota
  private route = inject(ActivatedRoute); // Responsável por ler a rota atual e seus dados

  // Aqui guardamos a trilha atual
  // Estado inicial da variável de estado é um array vazio, pois no início não temos nenhuma rota
  public breadcrumbs = signal<Breadcrumb[]>([]);
  // Após isso, o processo inclui a atualização do valor e em seguida a leitura do valor atualizado, que é feito através do método "set" e "get" da variável de estado.
  //Quando o .set() é disparado, o angular atualiza exclusivamente o nó no DOM onde o () foi chamado. Ele não roda a detecção de mudanças na página inteira

  constructor() {
    // Escuta toda vez que a rota termina de mudar
    // Reatividade (Observables): Sempre que você clica em um link, o angular dispara dezenas de eventos, o filter(NavigationEnd) trava a execução e so deixa o código rodar quando a navegação chega em 100%
    // O subscribe pega o momento exato e manda o angular rodar a função de remontar o breadcrumb
    this.router.events.pipe(filter((event) => event instanceof NavigationEnd)).subscribe(() => {
      return this.breadcrumbs.set(this.buildBreadcrumb(this.route.root));
    });
  }

  // Função recursiva para ler a URL e o "data" que você colocou nas rotas
  // As rotas no angular são lidas como uma ârvore (rota pai > rota filha > rota neta). A função recursiva afaz um loop simples
  // 1. Olha a rota atual -> 2. Extrai o nome do data e o caminho da URL -> 3. Salva os dados no array -> 4. Pergunta: "Essa rota tem uma sub-rota (filho)? -> 5. Se sim, ela chama a si mesma, passando a sub-rota para repetir a extração, se não, ela devolve o array finalizado"
  private buildBreadcrumb(
    route: ActivatedRoute,
    url: string = '',
    breadcrumbs: Breadcrumb[] = [],
  ): Breadcrumb[] {
    const children: ActivatedRoute[] = route.children;

    if (children.length === 0) {
      return breadcrumbs;
    }

    for (const child of children) {
      const routeURL: string = child.snapshot.url.map((segment) => segment.path).join('/');

      let nextUrl = url;
      if (routeURL !== '') {
        url += `/${routeURL}`;
      }

      const label = child.snapshot.data['breadcrumb'];
      if (label) {
        breadcrumbs.push({ label, url: nextUrl });
      }

      return this.buildBreadcrumb(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }
  //Resumo técnico: O código escuta o fim da mudança de rota, varre a árvore de rotas de cima a baixo pegando os nomes, salva no Signal, e o Signal injeta isso direto no HTML.
}
