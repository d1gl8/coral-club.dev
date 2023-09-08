declare global {
  type localeT = {
    code: string;
    current: boolean;
    url: string;
  };
  type localeDt = {
    locale: string;
    location: {
      alpha2: string;
      currency: string;
      flag: string;
      locales: localeT[];
      name: string;
    };
  };
}

export {};
