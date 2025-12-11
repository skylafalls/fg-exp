<template>
  <Head>
    <Link rel="icon" type="image/png" href="/favicon.png" />
  </Head>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />
  </UApp>
</template>
