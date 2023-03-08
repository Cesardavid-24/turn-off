#include <windows.h>

int main(int argc, char const *argv[]) {

    ExitWindowsEx(EWX_FORCEIFHUNG| EWX_FORCE, 0);
    PostQuitMessage(0);
    return EXIT_SUCCESS;
  
}
