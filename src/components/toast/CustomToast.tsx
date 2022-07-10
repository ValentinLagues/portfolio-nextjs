const CustomToast = ({ message }: { message: string }) => (
  <>
    <div className="text-xs bg-black border-white font-retro border-x-2 border-y-4">
      {message}
    </div>
  </>
);
export default CustomToast;
