// Función que lee todos los archivos del directorio /posts
// ********************************************************

import fs from 'fs'
//import matter from 'gray-matter'
import {PostMetadata} from './PostMetadata'

//const getPostMetadata = (): PostMetadata[] => {
	const folder = 'posts/'
   // Leemos todos los archivos de la carpeta "posts"
	const files = fs.readdirSync(folder)
   // Nos aseguramos de obtener solo archivos con extension ".md"
	const markdownPosts = files.filter((file) => file.endsWith('.md'))
   // Obtenemos datos de cada archivo con gray-matter.
	const posts = markdownPosts.map((fileName) => {
		const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
		//const matterResult = matter(fileContents)
		return {
			//title: matterResult.data.title,
			//date: matterResult.data.date,
			//subtitle: matterResult.data.subtitle,
			//slug: fileName.replace('.md', ''),
		}
	})

	//return posts


//export default getPostMetadata
