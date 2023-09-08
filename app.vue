<script setup lang="ts">
import useTranslates from "@/use/translates";

const { currentLocale, availableLocales, translatesPending, changeLang } =
  await useTranslates();
</script>

<template>
  <select
    name="lang"
    :value="currentLocale.code"
    @change="changeLang($event.target)"
  >
    <option v-for="loc in availableLocales" :key="loc.code" :value="loc.name">
      {{ loc.code }}
    </option>
  </select>
  <section id="checkout" v-if="!translatesPending">
    <header>
      <h1 class="title">{{ $t("checkout_title") }}</h1>
      <div class="subtitle">
        <p>{{ $t("receiver_country") }}</p>
        <p class="country">?getCountry.name?</p>
        <in-svg src="/images/icons/question.svg" />
      </div>
    </header>
  </section>
  <p v-else>loading ...</p>
</template>

<style lang="scss">
#coral-club {
  position: relative;
  padding: 70px 16px 24px;
}
select {
  position: absolute;
  top: 16px;
  right: 16px;
}

#checkout {
  header {
    h1.title {
      width: 100%;
      margin-bottom: 6px;
    }
    .subtitle {
      display: flex;
      align-items: center;
      p {
        display: inline-flex;
        &.country {
          margin: 0 8px 0 12px;
        }
      }
      svg {
        width: 24px;
        height: 24px;
        color: #bec1c6;
      }
    }
  }
}
</style>
