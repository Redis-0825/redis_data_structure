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

//Sets
//Mirip lists, tapi harus unix dan tidak pasti berurutan
sadd people hasan andi budi //berhasill add 3 value
sadd people hasan andi budi cindy //hanya berhasil add 1 value (cindy) karena harus unix
scard peoples //tampil 4 value tersimpan
smembers peoples //tampil 4 value (hasan, cindy, budi, andi)
srem peoples dani cindy erik //menghapus data sets, hanya 1 data valid yang terhapus (cindy)
smembers peoples //saat ini yg tampil 3 value (hasan, budi, andi)
sadd peoples2 mira andi nida
sadd peoples3 andi nida pika risa
sdiff peoples peoples2 //data yang ada di peoples tapi tidak ada di peoples2 (hasan, budi)
sinter peoples peoples2 //data yang ada di peoples dan peoples2 (andi)
sunion peoples peoples2 //data diambil semua dari peoples dan peoples2 tapi tetap harus unix (budi, andi, hasan, mira, nida)