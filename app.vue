<template>
  <select name="lang">
    <option
      v-for="loc in availableLocales"
      :key="loc.code"
      :value="loc.name"
      @click="switchLang(loc)"
    >
      {{ loc.code }}
    </option>
  </select>
  <h1 class="main-title">{{ $t("TITLE_MAIN") }}</h1>
  <!-- <h1 class="main-title">title</h1> -->
</template>

<script setup lang="ts">
const initUrl = "https://gb.coral.club/restApi/vue/init";
let { availableLocales } = useI18n();
const { setLocale, setLocaleMessage } = useI18n();

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

const { data: localeData, refresh }: Ref<localeDt> | any = await useFetch(
  initUrl
);

const {
  // locale,
  location: { locales: localesFromApi },
} = localeData.value;

// availableLocales = localesFromApi;
// console.log(availableLocales);

// current locale from api?
// availableLocales.find(
//     (loc: localeT) => loc.current
//   )

const currentLocaleIdx: Ref<localeT> | any = ref(
  availableLocales.findIndex((loc: localeT) => loc.current)
);
console.log(currentLocaleIdx.value);

availableLocales[currentLocaleIdx.value].current = false;
setTimeout(async () => {
  console.log(availableLocales);
  await refresh();
  console.log(currentLocaleIdx.value);
}, 1000);

// const setLang = async () => {
//   setLocale(currentLocale.value.code);
//   const {
//     data: translates,
//     // pending,
//     // refresh: refreshTranslates,
//   } = await useLazyFetch(currentLocale.value.url, {
//     transform: (value: string) => {
//       return JSON.parse(value);
//     },
//   });

//   // await pending()
//   setLocaleMessage(currentLocale.value.code, translates.value);
// };

// const switchLang = async (loc: localeT): Promise<void> => {
//   currentLocale.current = false

//   // refresh();
//   await setLang();
// };

// await setLang();
</script>
