const app=new Vue({
	el:"#clases",
	data:{
		nuevoProducto:'',
		nuevaCantidad:'',
		nuevoPrecio:'',
		productos:[
			{titulo:""},
		],
		cantidades:[
			{cantidad:"Pza:"},
		],
		costos:[
			{precio:"$"}
		],
		contador:0,
	},
	methods:{
		agregar: function(){
			if(this.nuevoProducto){
				this.productos.push({titulo:this.nuevoProducto, stock:true});
				this.nuevoProducto='';
			}

			if(this.nuevaCantidad){
				this.cantidades.push({cantidad:this.nuevaCantidad});
				this.nuevaCantidad='';
			}

			if(this.nuevoPrecio){
				this.costos.push({precio:this.nuevoPrecio});
				this.nuevoPrecio='';
			}
		}
	},
});