export const CREATE_TRUCK = "CREATE_TRUCK" 
export const UPDATE_TRUCK = "UPDATE_TRUCK"

export function createTruck(newTruck){
    return{
        type: CREATE_TRUCK,
        payload: newTruck
    }
}

export function updateTruck(updatedTruck){
    return{
        type: UPDATE_TRUCK,
        payload: updatedTruck,
    }
}