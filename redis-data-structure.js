//List (Linked List)
//Antrian diambil data paling bawah/kanan
//Tumpukan diambil data paling atas/kiri
lpush names "hasan" //push value ke list names ke sebelah kiri/left
lrange names 0 5 //show list names dari sebelah kiri, (hasan)
lpush names "andi"
lrange names 0 5 //show list names dari sebelah kiri, (andi, hasan)
lpush names "budi"
lrange names 0 5 //show list names dari sebelah kiri, (budi, andi, hasan)
rpop names 1 //ambil value list names sebelah kanan/right 1 data (hasan)
lrange names 0 5 //show list names dari sebelah kiri, (budi, andi) -> hasan sudah diambil
lpop names 1 //ambil value list names sebelah kiri/left 1 data (budi)
lrange names 0 5 //show list names dari sebelah kiri, (andi) -> budi sudah diambil
rpush names "cindy" //push value ke list names ke sebelah kanan/right
lrange names 0 5 //show list names dari sebelah kiri, (andi, cindy)