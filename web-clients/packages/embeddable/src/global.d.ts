export interface InitializeOptions {
  brandId: string;
  token?: string;
}

export interface RenderOptions {
  targetDom: HTMLElement;
  itemId: string;
  styles: {
    [key: string]: any;
  };
}

export interface ProductReviewApis {
  initialize: (options: InitializeOptions) => Promise<void>;
  renderReviewer: (options: RenderOptions) => Promise<void>;
  apis: any;
}

declare global {
  interface Window {
    FRAME_JS_URL: string;
    Review: ProductReviewApis | undefined;
  }
}

export {};
