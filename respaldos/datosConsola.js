console.log("Enter number");
var ran = process.openStdin();

ran.on("data",function(buffer){
		ran = parseInt(buffer, 10);
		console.log('Number:s '+ran);
});
