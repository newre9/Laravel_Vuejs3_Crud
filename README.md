# Laravel_Vuejs3_Crud
#install composer https://getcomposer.org/
#install nodejs and npm https://nodejs.org/en/
# install xampp
 #install mysql workbanch
#laravel new project_fullstack
#editing .env file 
#php artisan migrate
#composer require laravel/breeze
#php artisan breeze:install
#php artisan make:model Product -m
#database/migrations/xxxxx_create_products_table.php: update  add=>    $table->string('name' ); $table->string('picture');
#php artisan migrate
#php artisan make:controller Api/ProductController --resource --api --model=Product
#php artisan make:resource ProductResource
#php artisan make:request ProductRequest
#update API/CompanyController.php add CRUD function
#routes/api.php update add Route::apiResource('products', ProductController);
#npm install vue@latest vue-router@4
#create resources/js/components/products/ProductsIndex.vue:
#create resources/js/router/index.js:
#create resources/js/app.js:
#resources/views/layouts/app.blade.php: add id="app"
#add dashboard <router-view />
#create resources/js/composables/products.js add connect API
#Create Edit page CreateProduct page and delete button
#npm run dev 
#php artisan serve 
