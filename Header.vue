<template>
    <header class="w-full py-6 bg-gradient-to-r from-purple-500 to-blue-500">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <div>
                    <NuxtLink to="/" class="text-xl font-bold text-white">SMKCoding</NuxtLink>
                </div>

                <nav class="flex items-center gap-6">
                    <NuxtLink to="/" class="text-base text-white">Home</NuxtLink>
                    <NuxtLink to="/product" class="text-base text-white">Products</NuxtLink>
                    <NuxtLink to="/cart" class="text-base text-white">Cart</NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<style scoped>
.container {
    max-width: 100%;
    padding: 0 1rem; /* Adjust padding as needed */
}

header {
    width: 100%;
}
</style>