function BT(num)
{
	var alljsnr=document.getElementsByClassName("jsnr");
	//对下面每一个div进行遍历
	for(var i=0;i<alljsnr.length;i++)
	{
		if(i==num)
		{
			//说明要把第i个jsnr显示出来，其他jsnr隐藏
			alljsnr[i].style.display="block";
			document.getElementById("jdjs").children[i].className="jsbt"
		}
		else
		{
			alljsnr[i].style.display="none";
			document.getElementById("jdjs").children[i].className="nojsbt"
		}
	}
}
