import SwiftUI

struct Main: View {
    var body: some View {
        NavigationView {
            VStack {
                NavigationLink(destination: Home()) {
                    Text("Home")
                }
                .padding()
                
                NavigationLink(destination: Option2View()) {
                    Text("Option 2")
                }
                .padding()
                
                NavigationLink(destination: Option3View()) {
                    Text("Option 3")
                }
                .padding()
            }
            .navigationTitle("Home")
        }
    }
}

struct Option2View: View {
    var body: some View {
        Text("Option 2 Details")
            .navigationTitle("Option 2")
    }
}

struct Option3View: View {
    var body: some View {
        Text("Option 3 Details")
            .navigationTitle("Option 3")
    }
}

#Preview {
    Main()
}
