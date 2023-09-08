export default async function useTranslates() {
  let { availableLocales } = useI18n();
  const { setLocale, setLocaleMessage } = useI18n();

  const initUrl = ref("https://gb.coral.club/restApi/vue/init"); // @!
  const currentLocale: Ref<localeT> = ref({} as localeT);

  const { data: localeApiData }: Ref<localeDt> | any = await useFetch(
    () => initUrl.value,
    {
      transform: (localeApiData: localeDt) => {
        currentLocale.value = localeApiData.location.locales.find(
          (loc: localeT) => loc.current
        );
        setLocale(currentLocale.value.code);
        return localeApiData;
      },
    }
  );

  availableLocales = localeApiData.value.location.locales;
  const { pending: translatesPending } = await useFetch(
    () => currentLocale.value.url,
    {
      transform: (translates: string) => {
        setLocaleMessage(currentLocale.value.code, JSON.parse(translates));
      },
    }
  );

  const changeLang = (ev: HTMLSelectElement) => {
    currentLocale.value = availableLocales.find((l: localeT) => {
      return l.code === ev.options[ev.selectedIndex].value;
    });
    setLocale(currentLocale.value.code);
  };

  return { currentLocale, availableLocales, translatesPending, changeLang };
}
