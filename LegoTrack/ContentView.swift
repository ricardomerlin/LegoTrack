import SwiftUI

struct Main: View {
    @State private var isLoggedIn = false

    var body: some View {
        NavigationView {
            VStack(spacing: 60) {
                NavigationLink(destination: Lego_News()) {
                    Text("Lego News")
                }
                .padding()
                
                NavigationLink(destination: Feed()) {
                    Text("Feed")
                }
                .padding()
                
                NavigationLink(destination: AnyView(isLoggedIn ? AnyView(Profile()) : AnyView(LoginForm()))) {
                    Text(isLoggedIn ? "Logout" : "Login")
                }
                .padding()
            }
            .navigationTitle("LegoTrack")
        }
    }
}

#Preview {
    Main()
}
