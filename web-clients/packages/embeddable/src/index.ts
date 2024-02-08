import { InitializeOptions, RenderOptions } from './global';
import { listProducts } from './mainApis/adminApis';

declare let FRAME_JS_URL: string;

async function initialize(options: InitializeOptions) {
  // const brandId = options.brandId;
}

function writeToIframe(iframe: HTMLIFrameElement) {
  const iframeDoc = iframe.contentWindow && iframe.contentWindow.document;

  if (!iframeDoc) {
    throw new Error('Invalid iframe');
  }

  iframeDoc.open();

  // eslint-disable-next-line no-undef
  const script = FRAME_JS_URL;

  iframeDoc.write(`
    <!DOCTYPE html>
    <html>
        <head>
        <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900"
        rel="stylesheet"
        type="text/css"
      />
  
      <link
        href="/global_assets/css/icons/icomoon/styles.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/default/full/assets/css/bootstrap.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/default/full/assets/css/bootstrap_limitless.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/default/full/assets/css/layout.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/default/full/assets/css/components.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <link
        href="/default/full/assets/css/colors.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <script
        type="text/javascript"
        src="/global_assets/js/main/jquery.min.js"
      ></script>
      <script src="/global_assets/js/plugins/loaders/blockui.min.js"></script>
      <script
        type="text/javascript"
        src="/global_assets/js/main/bootstrap.bundle.min.js"
      ></script>
  
      <script src="/global_assets/js/plugins/visualization/d3/d3.min.js"></script>
      <script src="/global_assets/js/plugins/visualization/d3/d3_tooltip.js"></script>
      <script src="/global_assets/js/plugins/forms/styling/switchery.min.js"></script>
      <script src="/global_assets/js/plugins/ui/moment/moment.min.js"></script>
      <script src="/global_assets/js/plugins/pickers/daterangepicker.js"></script>
        </head>
        <body>
            <div id="mount"></div>
            <script src="${script}" async crossorigin="anonymous"></script>
        </body>
    </html>
  `);
  iframeDoc.close();
}

function mountIframe(
  brandId: string,
  targetDom: HTMLElement,
  styles: RenderOptions['styles']
) {
  const iframe = document.createElement('iframe');
  iframe.allowFullscreen = true;
  iframe.onload = writeToIframe.bind(null, iframe);

  for (const style in styles) {
    iframe.style[style as any] = styles[style];
  }

  targetDom.appendChild(iframe);
}

async function renderReviewer(options: RenderOptions) {
  const { styles = {} } = options;
  if (!options.itemId) {
    throw new Error('itemId is required');
  }

  if (!options.targetDom) {
    throw new Error('targetDom is required');
  }

  const iframeStyles = {
    ...styles,
    width: styles.width || 'inherit',
    minHeight: styles.minHeight || '700px',
  };

  mountIframe(options.itemId, options.targetDom, iframeStyles);
}

window.Review = {
  initialize,
  renderReviewer,
  apis: {
    listProducts,
  },
};
