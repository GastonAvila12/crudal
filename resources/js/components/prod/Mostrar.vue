<template>
    <div class="row">
        <div class="col-12 mb-2">
            <!-- llamamos al componente para Crear   -->
            <router-link :to='{name:"crearProd"}' class="btn btn-success"><i class="fas fa-plus-circle"></i></router-link>
        </div>
        <div class="col-12">             
                    <div class="table-responsive">
                        <table class="table table-bordered">
                            <thead class="bg-primary text-white">
                                <tr>
                                    <th>ID</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Precio</th>
                                    <th>Stock</th>
                                    <th>Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="prod in products" :key="prod.id">
                                    <td>{{ prod.id }}</td>
                                    <td>{{ prod.nombre }}</td>
                                    <td>{{ prod.descripcion }}</td>
                                    <td>{{ prod.precio }}</td>
                                    <td>{{ prod.stock }}</td>
                                    <td>
                                        <!-- llamamos al componente para Editar     -->
                                        <router-link :to='{name:"editarProd",params:{id:prod.id}}' class="btn btn-info"><i class="fas fa-edit"></i></router-link>
                                        <a type="button" @click="borrarProd(prod.id)" class="btn btn-danger"><i class="fas fa-trash"></i></a>
                                    </td>
                                </tr>
                            </tbody>
                            
                        </table>
                    </div>                          
        </div>
    </div>
</template>

<script>
export default {
    name:"products",
    data(){
        return {
            products:[]
        }
    },
    mounted(){
        this.mostrarProducts()
    },
    methods:{
        async mostrarProducts(){
            await this.axios.get('/api/prod').then(response=>{
                this.products = response.data
            }).catch(error=>{
                console.log(error)
                this.products = []
            })
        },
        borrarProd(id){
            if(confirm("¿Confirma eliminar el registro?")){
                this.axios.delete(`/api/prod/${id}`).then(response=>{
                    this.mostrarProds()
                }).catch(error=>{
                    console.log(error)
                })
            }
        }
    }
}
</script>