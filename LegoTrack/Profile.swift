import SwiftUI

struct Profile: View {
    var body: some View {
        VStack {
            Circle()
                .frame(width: 250, height: 250)
                .padding(.top, -325)
            Text("Profile")
                .navigationTitle("My Profile")
        }
    }
}

#Preview {
    Profile()
}
