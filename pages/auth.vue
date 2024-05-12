<template>
    <div>

    </div>
</template>

<script setup>

// const client = useSupabaseClient()
// const user = useSupabaseUser()

watchEffect(()=>{
    if (user.value) {
        return navigateTo('/')
    }
})

const login = async (prov)=>{
    const {data, error} = await client.auth.signInWithOAuth({
        provider: prov,
        redirectTo: window.location.origin
    })

    if(error) console.log(error)
}
    
</script>

