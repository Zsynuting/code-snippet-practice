const a = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAkACQAAD/4QCMRXhpZgAATU0AKgAAAAgABQESAAMAAAABAAEAAAEaAAUAAAABAAAASgEbAAUAAAABAAAAUgEoAAMAAAABAAIAAIdpAAQAAAABAAAAWgAAAAAAAACQAAAAAQAAAJAAAAABAAOgAQADAAAAAQABAACgAgAEAAAAAQAAAHigAwAEAAAAAQAAAF8AAAAA/8AAEQgAXwB4AwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/bAEMAAwMDAwMDBAMDBAYEBAQGCAYGBgYICggICAgICg0KCgoKCgoNDQ0NDQ0NDQ8PDw8PDxISEhISFBQUFBQUFBQUFP/bAEMBAwMDBQUFCQUFCRUODA4VFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFf/dAAQACP/aAAwDAQACEQMRAD8A/VKoqlqKgBJugr4N/aH+I2ufDnx34a8Sw2s0MNsZxjeBDckxADPB+6Tn61951+VP7W/g2+PxB8NXuqa1gao00cfncQxBY1zz2yaAM2H9oXx74u+Inh3xtYadL59v4euJ/scMv+jzf6RX138QviTr2mfCrRfEt/dxeFvEOoT2/kwzxZ61+bPg/wAL2+l6F4e0n7J/auiaxP5+t6lDL+4s/wDNtX3j8a73SfEPwk0TwV4Nil1ye4+z/YprL9/b/wCh/wDHz/pNAGJ42+KHi7xD4i0v+yYZfsXhef7dP9jl8j7ZX0h8FPiHP8V/ANj41uLP7DPcT3EHk1+dOveNfI1fVLifwvYf6RB5H/E/uvsNxX1X+yF4k0uy+CNvBc3CQvZ3U5k8v/V/NMzD8SCDQBZ/aI8ZDwb40+HGp6hfS6do8WuQLfyx/wCr+zmOXcG784FexeCPjJ4D+JI1ODwbq3246P1m8qvAfiz4u0DWvif8NZ7CX7bY6drXn3s3/PH/AI+K9/8A+FkeDfMu7TSdt5MsEk48rnfgZwDXOB8heKvjxcWXijxFYa745sILLT/9RDDFcfvqT4cfELxtB4h8B+Cx4ttbiy1iDUL6eaaK4+0f8fFeT/Fnw/4g8da7qeo23heKY6vDmxs5v+QgP+3au00Lwh4K8FfE74eY0O/m0zT9LuPts0MVwf8ASa6AP1DtPP8AJh8/rVuqentbzWkMtv8A6rGRVygAooooA//Q/U2iiigArzbx38N9A8e2cEGrWkM/2fp50VWPF/jvT/C8kGn/APHxql/xBDFXOS6149vIf9HisLGvNxWaUKH+8HVhcKWtE+GOhaRpZ0R7OzntScmM28eCT1JGME89cVoy2fhjwVpMPnxWulWVt/qf3VeKf8K2v59X/tfVviLr3n/88YZf9Hqz/wAK8v57uyuNd8Uap4jg0+fz4PtlfM/640Dq/suuaVr4l+F/jXX77w74r0nTo9Ytp9tvFdKCZocZWVcjHPp1r2PR/C/hGy0j7BoWnWsGl/8APGGKvl34kaXYeF9Xn8TW/gb/AITj+2P+P2aaX/U17Z8EEgi8CWrRQx2kNxK0scUf8GT39693Ic09uLFYX2B3/wDwiXhH/oB2P/fiL/4mrFn4X0Czk+0W2k2sEx7iKulor2zzDmovC+kDUP7X+xxfbv8AntVn+xNI/wCfO1/79VuUUAJD0NLRRQAUUUUAf//R/UWuR8WaodN0+a2trqKDUriIi087oZccfrXR6lewaXp89/P/AMu8PNfOGkS3+r3P/CyfELEycxWtt18uHn27kn/OMeJnuK9hhzpwuF9udJoWkiymOoap/pesTf8AH1ITkD2i4GBj2/wrShnt57ue387z5/8AnjXN3njXwzBd/Z59XtfP/wCuteFfGbS7j/hLfC2r/wBoy2OiahP5E81nX4x+/wAd/vB9fiv9iofWD6Z/0eD/AEirN5P9itPtE/7iC3riZvhtp+l+RbweKJbGC4/1HnS/66vCvHnwv+Lml6Te6/q3j+L7Do8/nzw/89revc/1Er/8w55v9u0D6ZtL62voJbiER3Fn6BPNEn4c5rE0iWz+H3iuKxhtUj0fxJ+9jlzjy5uBj0wePzHvXjng+9+JmiQ/8Jtf6d/avhbUIP8AUw/8sbeu/s/EHhv4jaA+meF7mO0vIcSr9p4kjlHPGM/mM0ZXhcfga4Yr9+fVlWK8/wDhp4o/4SzwfZ6pMp84fu5cjA8wdcfoa9Ar9mPmQooooAKKKKACiiigD//S+8vjNBf3vw21u30nzfP8j/ljXy98VPFFxonww0T+yZv+QhZeRBNX3DNB9ttJ7Cevh688Ff2r4dn+Cmu/uNU8L/aJ9Lmm/wCW1v8A8u1fNZ9hfbn03C+K9hXPif8A19p9vnm8+evrT4RXreP/AATd+DdauZI4pj+6uevl98dRXif/AApT4i2U32D7J+4r69+GXw4h8NaV9jveZp+cf3K+HxXsKB+4cY4rKa+APm/4kWPxE1TXdL0jVruXXP8AhGP+PK90ytvxtqnxk8eaHomkeTF9i0efz5/+fiasTW/Cnir4ceKruCXVJBJef8ev/POQD/DNbcPxN0S2G3xTDeadqMBAwY8eYPX2/HFdP9u4/wD5hz80wuV4D2B7Zf8A7UvhXw7oGkRt4avbq4mn/s2e2j25hx1Y5I6VW+N/gb4fWvg+D4g6DL/wj+sZ8/TvKO3zZsZH8uvbrXzfr3/CE+KPFuiXEEOs2M+oT+R50P7jzq0vHniHQfD2o/2RYQ3XiO+0/wD1H2y6/wBHs6+mwuae3/3g8z/U6vXr/wCzn1V+z5N49hu76w8ZzWHk3EFvfQRWdeo/FP4yeEPhRDY3HiuXH9of6ivE/wBnDxrrHjzxNqur6paRQQ29jbwDya84/bknt/O8L/vovP8AIuP+WtfS5YfNZphfYYj6uetQ/tkfCP8A5bzS/wDfqq037Z3wy8n/AEDzZ6/Fm88Ua95s/kXcsEP/ADxqrD4h1+b/AJe5a9P6rXPMP2Vm/bV8I/8ALDQrqf8A7a0aL+2l4N1DUrTTtS0WfTY7iQR+fI48oZHX16+1fjVNrevwf8vktdt4Pvb/AFrz7C/mlng8iuUD+izTb6w1Ozg1Cxm8+CcZhNaW2T+6K/Or9hLW9UntfEvh24unmtbOQeVHJ/BnPT61+hX2R/agD//T/UWvm39oOxsINI0vV9Jhi/4Sj7bbwWM1e2eMfENh4R8O6nr98f3FtDXyr4e0iXUVn+KPxNfz7qHypYYwT5NsQd2YeSck479ffJrxM9xXsMOdWFwp6jput/bfIt9d/capb/6+tv8A1/8Ao9VvI0jW4YL/AMnz/tH/AC2rShg8j/UV+H4rFH3JyXjbwlpPiuzJ1k+T5I4l/uV4V/wo7xd537jxHaz6X/0+RV9RVzepeIbCy/5C0Ms9cv8AansAPJfDXwYs9FvDrmtX39pSwnNrHjGz68818PeLPt2keJdROtW7xSx3Rlz/AM9MnOfoa+89W+KuoGU6V4e0UyajcD/RZpceSffqK4nUp/AWqavB4u+JOr6XPqmn/wDLGGXyLevuOFz0sr4nr4EPgsG8H/BbXvEa3edYvITKI/8AnngHH+NVk+DHh34h+CT4q8R319fakyS48643eUSeMZB6ema8u8dyeHPFckK/CvRZYIoyftV3/wAsZP8AA/l9K0tH8efYvDsGkf2j5Fl/y3r954Ywvtz8qz3Fe3r/AFg8cm+FHhHzq5LWPBWg2UM/kWf/ACwr2y88Q+GYP+Xu1/0j/prXE6x4vsPsl95E0X+o/wCetfs+FyvAUKB8j9arny7Npdve6TfXH/PvPS/DeH99e0k3iG3g0O+t/wDlvcT0fDf/AI+5/wB9X5Fn3+8H02FP0o/YKg/4mPjaf1+z1+k2RX5w/sI/d8X/AFH86/QSvmToP//U+mPjhrTX3jj4ceBpPNOm3t5cy34XJEhWAi3Bx/tk/nVr4qfaP+Ed0vSIP9frF7b2P7mu/wDiz8Oz420eG5sBHZa1os/n2c/p9a+W/BFz8Ur/AOMZ0z4nz2hbTrLz4bey/wBR+Vfn3E+FPcyw+pNNsrfS7SCwg/1Fv+4qzRRX4wfThRRRQB4V+0VBcf8ACA/2/wDbPsM/h+fz4PJqz8Gf2evBP/CJaXr2u/8AE8vtQg8/zpq7/wAeeHbDxR4A8RaTff8ALxZUn7Lt6b74P6UZ/wDXWE1xBmv2fgT/AHc+YzM9bg8GeH7C0+x6dp9tZRSDy8QxrH/6CBX5rftdfDbQfCGr+F4NChuoINQguPP8mv1W/wBRWZqWh6TrQhN/ZxXoH/Pav0v617A8M/nbm8IX/wDx8fa7r/v1cUf8Ijfzw/8AIR/cV+83jDwV4Rg8O6p/xKIv9RX4w2nEM9xDx+/uK6f7VrnOeXTeA/I/193W54b0u38PefcebLP/ANsq7WGH+1PEWh6fP/qbmf8AfV+xkfwN+Fl3ZwfafC9rN+571zfWjoPmT9hGwuToXijV5rWW3gnuPIh86vvf7K392OqekaJpPhfTRY6TZx2FjAMiKEcVY/tWx/ut+X/165QP/9k="

function decodeBase64Image(base64Str) {
  var matches = base64Str.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/);
  var image = {};
  if (!matches || matches.length !== 3) {
      throw new Error('Invalid base64 string');
  }

  image.type = matches[1];
  image.data = new Buffer(matches[2], 'base64');

  return image;
}

const fs = require('fs')

fs.writeFile('./image.png', decodeBase64Image(a).data, function(err) {
  console.log('File created');
})