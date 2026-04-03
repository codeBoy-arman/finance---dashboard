import { useDispatch, useSelector } from "react-redux";
import { setRole } from "../../store/financeSlice";

export default function RoleSwitcher() {
  const dispatch = useDispatch();
  const role = useSelector((state) => state.finance.role);

  return (
    <select
      value={role}
      onChange={(e) => dispatch(setRole(e.target.value))}
      className="bg-white/10 border border-gray-600 px-3 py-2 rounded-lg text-white"
    >
      <option value="viewer" className="text-black">Viewer</option>
      <option value="admin" className="text-black">Admin</option>
    </select>
  );
}