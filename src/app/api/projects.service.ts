import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})


export class ProjectsService {

  constructor() { }

  getProjects() {
    return PROJECTS;
  }
}


const PROJECTS = [
  {
    id: 1,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  }, 
  {
    id: 2,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  },
  {
    id: 3,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  },
  {
    id: 4,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  },
  {
    id: 5,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  },
  {
    id: 6,
    name: 'Reduced Emissions from Deforestation and Degradation',
    weight: '957, 842 lbs. offset',
    description: 'Protects forests and wildlife on the southern shores of Lake Kariba in Zimbabwe, forming a giant biodiversity corridor.',
    location: 'Kariba Redd+ - Zimbabwe',
    imageUrl: 'assets/Tile_Image.jpg'
  }
];