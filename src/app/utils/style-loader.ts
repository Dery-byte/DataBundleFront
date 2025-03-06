export function loadStyle(url: string): void {
    const existingLink = document.querySelector(`link[href="${url}"]`);
    if (!existingLink) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = url;
      document.head.appendChild(link);
    }
  }
  