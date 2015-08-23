path=~/public_html/warwicktkd
find $path-developer ! -name "footer.php" ! -name "header.php" -print0 | while IFS= read -r -d '' file
do 
   if [[ $file == *.php ]]
    then 
	file=${file#$path-developer}
	echo "compressing file : $path-developer/$file to $path/$file"
    	java -jar $path-developer/compressor/htmlcompressor.jar $path-developer/$file > $path/$file
   fi 
done

