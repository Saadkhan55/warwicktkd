path=../
if [ -e combined.js ]; then rm combined.js; fi
echo 'Looking for js files'
find $path-developer/js -type f -name "*.js" ! -name "combined.js" | xargs cat > $path-developer/js/combined.js
echo 'Combining js files into combined.js'
java -jar $path-developer/compressor/yuicompressor.jar $path-developer/js/combined.js > $path/js/combined.js  
echo 'compressing js file'

