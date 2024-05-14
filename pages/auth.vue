<template>
    <div id="AuthPage" class="w-full h-[100vh] h-screen pt-32">
        <div class="w-full">
            <div class="w-full flex items-center justify-center gap-2.5 p-2">

                <img src="/threads-logo.png" class="w-[35px]">
                <span class="font-bold text-2xl text-white">
                    Threads 
                </span>
            </div>
        </div>

    </div>
</template>

<script setup>

definePageMeta({
    layout: 'auth-layout',
})

// const client = useSupabaseClient()
// const user = useSupabaseUser()

// watchEffect(()=>{
//     if (user.value) {
//         return navigateTo('/')
//     }
// })

const login = async (prov)=>{
    const {data, error} = await client.auth.signInWithOAuth({
        provider: prov,
        redirectTo: window.location.origin
    })

    if(error) console.log(error)
}
    
</script>

