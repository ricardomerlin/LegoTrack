import SwiftUI

struct LoginForm: View {
    @State private var username = ""
    @State private var password = ""
    @State private var isLoggedin = false
    
    var body: some View {
        VStack {
            Image(systemName: "person.circle")
                .resizable()
                .frame(width: 100, height: 100)
                .foregroundColor(.blue)
                .padding(.bottom, 20)
            
            TextField("Username", text: $username)
                .padding()
                .background(Color(.secondarySystemBackground))
                .cornerRadius(8)
                .padding(.horizontal, 50)
                .autocapitalization(.none)
            
            SecureField("Password", text: $password)
                .padding()
                .background(Color(.secondarySystemBackground))
                .cornerRadius(8)
                .padding(.horizontal, 50)
            
            Button(action: {
                isLoggedin.toggle()
            }) {
                Text("Login")
                    .foregroundColor(.white)
                    .padding()
                    .background(Color.blue)
                    .cornerRadius(8)
            }
            .padding()
            
            Spacer()
        }
        .padding()
        .fullScreenCover(isPresented: $isLoggedin, content: HomeView.init)
    }
}

struct HomeView: View {
    var body: some View {
        Text("Welcome!")
    }
}

struct ContentView: View {
    var body: some View {
        LoginForm()
    }
}
