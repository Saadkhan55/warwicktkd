path=~/public_html/warwicktkd
if [ -e combined.css ]; then rm combined.css; fi
echo 'Looking for css files'
find $path-developer/css -type f -name "*.css" ! -name "combined.css" ! -name "font-awesome.min.css" | xargs cat > $path-developer/css/combined.css
echo 'Combining css files into combined.css'
java -jar $path-developer/compressor/yuicompressor.jar $path-developer/css/combined.css > $path/css/combined.css
echo 'compressing css file'

