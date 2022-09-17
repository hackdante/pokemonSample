
import { ref } from "vue";
const useCounter = ( initialState = 5) => {
    const title = ref("Welcome to Composition Counter API");
    const counter = ref(initialState);
    return {
        title,
        counter,
        changeTitle: () => title.value = 'Change',
        increase: () => (counter.value += 1),
        decrease: () => (counter.value -= 1),
    };
}

export default useCounter


