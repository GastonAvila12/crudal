<template>
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header"><h4>Nuevo Producto</h4></div>
                <div class="card-body">
                    <form @submit.prevent="crear">
                        <div class="row">
                            <div class="col-12 mb-2">
                                <div class="form-group">
                                    <label>Nombre</label>
                                    <input type="text" class="form-control" v-model="prod.titulo">
                                </div>
                                <div class="form-group">
                                    <label>Descripcion</label>
                                    <input type="text" class="form-control" v-model="prod.descripcion">
                                </div>
                                <div class="form-group">
                                    <label>Precio</label>
                                    <input type="decimal" class="form-control" v-model="prod.precio">
                                </div>
                                <div class="form-group">
                                    <label>Stock</label>
                                    <input type="integer" class="form-control" v-model="prod.stock">
                                </div>
                            </div>
                           
                            <div class="col-12">
                                <button type="submit" class="btn btn-primary">Guardar</button>
                            </div>
                        </div>                        
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:"crear-prod",
    data(){
        return {
            prod:{
                nombre:"",
                descripcion:"",
                precio:"",
                stock:""
            }
        }
    },
    methods:{
        async crear(){
            await this.axios.post('/api/prod',this.prod).then(response=>{
                this.$router.push({name:"mostrarProducts"})
            }).catch(error=>{
                console.log(error)
            })
        }
    }
}
</script>