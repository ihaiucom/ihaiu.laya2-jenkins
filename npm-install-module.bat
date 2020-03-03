IF EXIST npm (
	echo "exist npm"
) ELSE (
	mkdir npm
)
cd npm

echo "begin install gulp"
cnpm install gulp
cnpm install --save gulp


echo "begin install layaair2-cmd"
cnpm install layaair2-cmd
cnpm install --save layaair2-cmd

pause