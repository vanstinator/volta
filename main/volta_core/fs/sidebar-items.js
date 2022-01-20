initSidebarItems({"fn":[["create_staging_dir","Creates a staging directory in the Volta tmp directory"],["create_staging_file","Creates a NamedTempFile in the Volta tmp directory"],["dir_entry_match","Reads the contents of a directory and returns a Vec of the matched results from the input function"],["ok_if_not_found","Converts a failure because of file not found into a success."],["read_dir_eager","Reads the full contents of a directory, eagerly extracting each directory entry and its metadata and returning an iterator over them. Returns `Error` if any of these steps fails."],["read_file","Reads a file, if it exists."],["remove_dir_if_exists","Removes the target directory, if it exists. If the directory doesn’t exist, that is treated as success."],["remove_file_if_exists","Removes the target file, if it exists. If the file doesn’t exist, that is treated as success."],["rename","Rename a file or directory to a new name, retrying if the operation fails because of permissions"],["set_executable","Ensure that a given file has ‘executable’ permissions, otherwise we won’t be able to call it"],["symlink_dir","Create a directory symlink. The `dst` path will be a symbolic link pointing to the `src` path"],["symlink_file","Create a file symlink. The `dst` path will be a symbolic link pointing to the `src` path."],["touch","Opens a file, creating it if it doesn’t exist"]]});