import tkinter as tk
import subprocess

class VirtualAssistantUI:
    def __init__(self, master):
        self.master = master
        master.overrideredirect(True)  # Remove window decorations
        master.attributes('-topmost', True)  # Keep window on top of others
        master.geometry("+10+10")  # Position window at top left corner

        self.frame = tk.Frame(master, bg='lightblue', bd=1, relief=tk.SUNKEN, width=150, height=50)
        self.frame.pack()

        # Create a button
        self.button = tk.Button(self.frame, text="Run main.py", command=self.run_main_py)
        self.button.pack(pady=5)

    def run_main_py(self):
        # Execute main.py
        subprocess.Popen(["python", "main.py"])

def main():
    root = tk.Tk()
    app = VirtualAssistantUI(root)
    root.mainloop()

if __name__ == "__main__":
    main()
