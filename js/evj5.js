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
		subtotal:0,
		total:0,
		iva:0,
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
			if(this.nuevoProducto && this.nuevaCantidad && this.nuevoPrecio){
		    	this.contador=parseInt(this.contador)+parseInt(this.nuevaCantidad);
		    	this.subtotal=this.nuevaCantidad*this.nuevoPrecio;
			this.iva=this.iva+this.subtotal;
      			this.total=this.iva+this.iva*0.16;
			}
		}
	},
});
