#!/bin/sh

# ${chaine#souschaine}  : Supprime la correspondance la plus petite de "souschaine" à partir du début de .
# ${chaine##souschaine} : Supprime la correspondance la plus grande de "souschaine" à partir du début de .
# ${chaine%souschaine}  : Supprime la correspondance la plus petite de "souschaine" à partir de la fin de .
# ${chaine%%souschaine} : Supprime la correspondance la plus grande de "souschaine" à partir de la fin de .



for FIL in ../svg/niveau*.svg; do
  pdfname="${FIL%.*}" # remove .svg
  pdfname="${pdfname##*/}.pdf"  # svg/
  echo $pdfname
  wkhtmltopdf --page-height 170mm --page-width 105mm "$FIL" "$pdfname"
done

xelatex m1lille1.tex

# rm niveau*.pdf
rm m1lille1.log
rm m1lille1.aux
rm m1lille1.out
rm m1lille1.synctex
