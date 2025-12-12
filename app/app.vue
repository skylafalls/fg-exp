<template>
  <Head>
    <Link rel="icon" type="image/png" href="/favicon.png" />
  </Head>
  <UApp>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </UMain>

    <AppFooter />
  </UApp>
</template>

<style>
body {
  background-color: rgb(210, 255, 210);
}

.dark body {
  background-color: rgb(0, 43, 0);
}
</style>
