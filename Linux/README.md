# test-DevIT
1. Перейдите в папку html и выведите список всех папок(без файлов)  
        cd html 
        ls -*d/
2. Удалите пустые строки из файла error.txt
        cd ..
        cd logs
        cat error.txt
        sed -i '/^$/d' error.txt
3. Выведите список файлов с расширением .jpg в папке images
        cd ..
        cd images ls *.jpg
4. Напишите bash скрипт который переименует все файлы в папке logs с .txt на .log
        rename 's/\.txt$/\.log/' *.txt
5. Модифицируйте права доступа и владельца папки images следующим образом: Пользователь www-data и группа www-data имеют чтение/запись на всю директорию и на файлы внутри директории остальные не имеют доступа к папке и файлам.
        ls -l
        sudo chown www-data:www-data images
        sudo chmod 770 images
6. Удалите все содержимое в файле access.txt не удаляя сам файл.
        cd ..
        cd logs
        cat access.txt
        sed -i 'd' access.txt
7. Выведите список файлов в папке images размер которых более 2 мегабайт
        find -size +2048k
