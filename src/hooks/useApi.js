import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { CheckWinOrLose, rollDice, updateCurrentAmount } from "../features/game/gameSlice";
import { API_URL } from "../vars/constants";

function useApi() {
    const userData = useSelector((state) => state.userData);
    const dispatch = useDispatch();


    const rollDie = async () => {
        const { betAmount, selectedOption, currentAmount } = userData;

        if (currentAmount === 0) {
            window.alert("Game over. Please reload the page to restart.");
            return;
        }

        if (!betAmount || !selectedOption) {
            window.alert("Enter Options!");
            return;
        }

        try {
            const response = await axios.get(
                `${API_URL}/dice/roll-dice`
            );
            const result = response.data;
            dispatch(rollDice(result));
            return result;
        } catch (error) {
            console.error("Error rolling the dice:", error);
        }
    };

    const checkWin = async (data) => {
        try {
            const response = await axios.post(
                `${API_URL}/dice/check-win`,
                data
            );
            console.log("Response:", response.data);
            const result = response.data;
            dispatch(CheckWinOrLose(result));
            return result;
        } catch (error) {
            console.error("Error:", error);
            setLoading(false);
        }
    };

    const updateAmount = async (result) => {
        try {
            const response = await axios.post(
                `${API_URL}/dice/update-amount`,
                result
            );
            console.log("Response:", response.data);
            const { newAmount } = response.data;
            dispatch(updateCurrentAmount(newAmount))
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return [rollDie, checkWin, updateAmount]
}

export default useApi
