export const APP_ID = process.env.INTERCOM_APP_ID;

// Loads Intercom with the snippet
// This must be run before boot, it initializes window.Intercom

export const load = () => {
  /* eslint-disable */
  // prettier-ignore
  // @ts-ignore
  (function () { var w = window; var ic = w.Intercom; if (typeof ic === "function") { ic('reattach_activator'); ic('update', w.intercomSettings); } else { var d = document; var i = function () { i.c(arguments); }; i.q = []; i.c = function (args) { i.q.push(args); }; w.Intercom = i; var l = function () { var s = d.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = 'https://widget.intercom.io/widget/ravmo56d'; var x = d.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x); }; if (document.readyState === 'complete') { l(); } else if (w.attachEvent) { w.attachEvent('onload', l); } else { w.addEventListener('load', l, false); } } })();
};

// Initializes Intercom
export const boot = (options: Intercom_.IntercomSettings) => {
  window &&
    window.Intercom &&
    window.Intercom("boot", {
      api_base: "https://api-iam.intercom.io",
      app_id: APP_ID,
      ...options,
    });
};

export const update = () => {
  window && window.Intercom && window.Intercom("update");
};
