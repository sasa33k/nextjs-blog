export default function cloudinaryLoader({ src, width, quality }) {
    //const params = ['f_auto', 'c_limit', `w_${width}`, `q_${quality || 'auto'}`]
    return `${process.env.BASE_PATH}${src}`
  }