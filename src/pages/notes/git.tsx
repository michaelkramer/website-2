export default function Component() {
  return (
    <div>
      <div className="text-3xl font-bold mb-4">
        Git situations that you might run into.
      </div>
      <div className="tabs tabs-box">
        <input
          type="radio"
          name="git_situations"
          className="tab"
          aria-label="Accidentally pushed your .env files"
          defaultChecked
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="text-2xl  font-bold">
              Say you accidentally pushed your .env files
            </div>
            <div>
              This is ok, you can fix this. Your .env hold your sensitive data,
              but this could also be any file you don't want there. Here is what
              you do.
            </div>
            <div>Create a new orphan branch "not part of the history"</div>
            <div className="mockup-code">
              <pre>
                <code>git checkout --orphan temp_branch</code>
              </pre>
            </div>
            <div>Add all to new commit</div>
            <div className="mockup-code">
              <pre>
                <code>git add -A git commit -am "The first commit"</code>
              </pre>
            </div>
            <div>Delete the `name_branch` branch</div>
            <div className="mockup-code">
              <pre>
                <code>git branch -D name_branch</code>
              </pre>
            </div>
            <div>Rename the `temp_branch` to `name_branch`</div>
            <div className="mockup-code">
              <pre>
                <code>git branch -m name_branch</code>
              </pre>
            </div>
            <div>Forcefully update the remote repository</div>{" "}
            <div className="mockup-code">
              <pre>
                <code>git push -f origin name_branch</code>
              </pre>
            </div>
          </div>
        </div>

        <input
          type="radio"
          name="git_situations"
          className="tab"
          aria-label="Changed your .gitignore"
        />
        <div className="tab-content bg-base-100 border-base-300 p-6">
          <div className="grid grid-cols-1 gap-4">
            <div className="text-2xl font-bold">
              So you changed your .gitignore but the files are still being
              pushed??
            </div>
            <div>You will have to clear the existing git `cache` first.</div>
            <div>Remove the cache of all the files</div>

            <div className="mockup-code">
              <pre>
                <code>git rm -r --cached .</code>
              </pre>
            </div>
            <div>### Remove the cache of specific file </div>
            <div className="mockup-code">
              <pre>
                <code>git rm -r --cached &lt;file_name.ext&gt;</code>
              </pre>
            </div>
            <div>
              Once you clear the existing cache, add/stage file/files in the
              current directory and commit
            </div>
            <div className="mockup-code">
              <pre>
                <code>git add . </code>
              </pre>
              <pre>
                <code>
                  // To add all the files git add &lt;file_name.ext&gt;{" "}
                </code>
              </pre>
              <pre>
                <code>
                  // To add specific file git commit -m "Suitable Message"
                </code>
              </pre>
            </div>
            <div>
              This works for both adding a file that was once ignored as well as
              ignoring a file that was once tracked
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
