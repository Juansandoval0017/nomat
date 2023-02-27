export type Categorias = {
        "CodigoCategoria": number,
		"Categoria": string,
		"slugcategory": string
}

export type Producto = {
	
		"PartNum": string,
		"Sku": string,
		"IdFamilia": string,
		"Familia": string,
		"IdCategoria": string,
		"Categoria": string,
		"Name": string,
		"Description": string,
		"IdMarca": string,
		"Marks": string,
		"MarcaHomologada": string,
		"Salesminprice": number ,
		"Salesmaxprice": number,
		"precio": number,
		"CurrencyDef": string,
		"Quantity": number,
		"TributariClassification": string,
		"Descuento": number,
		"shipping": number,
		"condition": string | null,
		"category": string | null,
		"color": string,
		"width": number,
		"height": number,
		"depth": number,
		"dimensions_unit": string | null,
		"weight": number,
		"weight_unit": string | null | number,
		"shipping_width": number,
		"shipping_height": number,
		"shipping_depth": number,
		"ListaProductosBodega": [
			{
				"Bodega": string,
				"NombreBodega": string,
				"Cantidad": number,
			}
		],
		"xmlAttributes": string,
		"Imagenes": Array<string>,
		"Nuevo": boolean,
		"slug": string,
	
}

export type Catalogo = {

	"paginado":{
		"CantidadProduct": number,
		"TotalPag": number,
		"PaginaActual": number,
		"Marcas": Array<Array<string>>,
		"Colors": Array<string>,
		"categoriasSub": Array<Array<string>>,
		"Precios":{
			"PrecioMinimo": number,
			"PrecioMaximo": number
		}

	},
	"listaproductos": Array<Producto>

}

export type NuevosProductos = {

	name: string,
	precio: number,
	slug: string,
	image: string,
	partNum: string,

}

export type Caracteristicas = {
	AttributeName: string,
	AttributeValue: string,
}

export type Atributos = {
   ListaAtributos: {
	Atributos: {
		attributecs: Caracteristicas[]
	}
   }
}

