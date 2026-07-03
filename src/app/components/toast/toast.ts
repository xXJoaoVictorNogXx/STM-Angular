import { ChangeDetectionStrategy, Component } from '@angular/core';
import { toast } from '@spartan-ng/brain/sonner';
import { HlmButtonImports } from '@spartan-ng/helm/button';

@Component({
  selector: 'spartan-sonner-types-example',
  imports: [HlmButtonImports],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: `./toast.html`,
})
export class SonnerTypesExample {
  showToast() {
    toast('Event has been created');
  }

  showSuccess() {
    toast.success('Event has been created');
  }

  showError() {
    toast.error('Failed to create event');
  }

  showWarning() {
    toast.warning('Event is missing a name');
  }

  showInfo() {
    toast.info('Event will start in 10 minutes');
  }

  showPromise() {
    toast.promise<{ name: string }>(
      () => new Promise((resolve) => setTimeout(() => resolve({ name: 'Angular Connect' }), 2000)),
      {
        loading: 'Loading...',
        success: (data) => `${data.name} has been created`,
        error: 'Error',
      },
    );
  }
}
