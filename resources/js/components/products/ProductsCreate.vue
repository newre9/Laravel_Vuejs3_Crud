<template>
 

    <form class="space-y-6" @submit.prevent="saveProduct" method="POST">
        <div class="space-y-4 rounded-md shadow-sm">
            <div>
                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                <div class="mt-1">
                    <input type="text" name="name" id="name"
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="form.name">
                </div>
            </div>

            <div>
                <label for="picture" class="block text-sm font-medium text-gray-700">Picture</label>
                <div class="mt-1">
                    <input type="text" name="picture" id="picture"
                            class="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            v-model="form.picture">
                </div>
            </div>

         

            
        </div>
        <div v-if="errors">
            <div v-for="(v, k) in errors" :key="k" >
                <p v-for="error in v" :key="error" >
                    {{ error }}
                </p>
            </div>
        </div>
        <button type="submit"
                class="inline-flex items-center px-4 py-2 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-800 border border-transparent rounded-md ring-gray-300 hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring disabled:opacity-25">
            Create
        </button>
    </form>
</template>

<script >
import useProducts from '../../composables/products.js'
import { reactive } from 'vue'

export default {
     setup() {

        const form = reactive({
            name: '',
            picture: '',
            
        })

        const { errors, storeProduct } = useProducts()

        const saveProduct = async () => {
               await storeProduct({ ...form})
              
        }

        return {
            form,
            errors,
            saveProduct
        }
     }
 }
 </script>