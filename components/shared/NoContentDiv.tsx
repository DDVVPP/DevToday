const NoContentDiv = ({ contentType }: { contentType: string }) => {
  return (
    <div className="flex h-24 items-center w-full justify-center rounded-lg bg-white-100 dark:bg-dark-800">
      <p className="paragraph-3-medium text-white-400">No {contentType}</p>
    </div>
  );
};

export default NoContentDiv;
