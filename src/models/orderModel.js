cosnt =reuire("mongoose");
const ObjectId= mongoose.schema.types.ObjectId

const orderSchema= new.mongoose.schema({

    userId:{
        type:ObjectId, // connection to user DB/collection
        ref:"User"
    },
    productId:{
        type:ObjectId, // connection to product DB/collection
        ref:"Product"

    },
    name: String,
	balance:{type:Number,
        default:100
    }, // Default balance at user registration is 100
	address:String,
	age: Number,
 	gender:{enum:["male","female ","ohters"]
         }, // Allowed values are - “male”, “female”, “other”
	isFreeAppUser:{type:Boolean,
        default:false}

})




    
   





module.exports = mongoose.model('Order', orderSchema) //Collection name Order 
            // local name =     DB name , public name 



