import { db } from './connectDb.js'

const theFish = {
    species: 'tetra',
    origin: 'amazon',
     color: 'silver',
     size: '1',
};
// Add a fish

export async function addAFish(){
    const fishList = await db.collection('fish').find({}).toArray();
    
    console.table(fishList);
}



// Get all fishies
export async function getAllFish() {
const fishList = await db.collection('fish').find({}).toArray();
console.table(fishList);

}