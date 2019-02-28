Çalışma = {
 
    öklid(a, b){
        let max = a > b ? a : b
        let min = b <= a ? b : a
        return max % min == 0
            ? min
            : this.öklid(min, max %min)
    },
 
    ebob(a, b){
        while(a != b){
            a > b
                ? (a = a-b)
                : (b= b-a)
        }
        return a
    },
 
 
 
    çöz(sayı, izlence){
        let başlangıç = +new Date()
        let sonuç = this[izlence](sayı[0],sayı[1])
        return [+new Date() - başlangıç, sonuç]
    }
}