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

//Hashes
//Berbentuk pair (key-value)
//Tidak menggunakan index seperti Lists, bisa menggunakan key apapun
hset "laptop:1" name "Asus Tuf Gaming 281B" price "15000000" brand "Asus" //set hashes
hset "laptop:2" name "Thinkpad T480s" price "8000000" brand "Lenovo"
hset "laptop:3" name "Macbook Pro M4" price "28000000" brand "Apple"
hgetall "laptop:1" //get all value hashes (key-value) laptop:1, sesuai inputan
hget "laptop:2" name //get salah satu, result : Thinkpad T480s
hget "laptop:3" brand //get salah satu, result : Apple
hset "laptop:1" name "HP Pavilion G4" price "5000000" brand "HP" //Update data yang sudah ada, bisa juga update hanya 1 key:value
hgetall "laptop:1" //Data pada laptop:1 akan terupdate
hincrby "laptop:1" price -1000000 //increment by, kurangi value price dengan -1000000
hget "laptop:1" price //valuenya menjadi 4000000
hincrby "laptop:2" price 1000000 //increment by, tambah value price dengan 1000000
hget "laptop:2" price //valuenya menjadi 9000000

//Sorted Sets
//Mirip sets, tapi datanya diurutkan sesuai nilai score (score untuk sort by ascending)
//Jika terdapat score sama, diurutakan scr lexicographically
//Value boleh sama jika score berbeda, dikatakan unik jika value dan score sama
zadd quantity 99 mangga //add data sorted sets
zadd quantity 49 alpukat
zadd quantity 91  melon
zadd quantity 95 manggis
zcard quantity //4, sesuai jumlah data sorted sets
zrange quantity 0 2//alpukat, melon, manggis -> show by ascending index 0-2
zrange quantity 90 100 byscore //melon, manggis, mangga -> show by score dan tetap ascending
zrange quantity 0 -1 withscores //show semua data baik value dan score
zrem quantity manggis //remove spesific data
zrange quantity 0 -1 withscores //data manggis sudah terhapus
zremrangebyscore quantity 45 95 //remove range tertentu by score misal 45-94
zrange quantity 0 -1 withscores //data dengan score dari 45 ke 95 dalam hal ini alpukat dan melon sudah terhapus